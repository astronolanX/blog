'use client'

import Image from 'next/image'
import { useState } from 'react'
import { MediaItem } from 'app/archive/data'

interface MediaGridProps {
  items: MediaItem[]
}

interface MediaCardProps {
  item: MediaItem
  onClick: () => void
}

function MediaCard({ item, onClick }: MediaCardProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 hover:scale-105"
      onClick={onClick}
      style={{ aspectRatio: `${item.width}/${item.height}` }}
    >
      {item.type === 'image' && (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      
      {item.type === 'video' && (
        <video
          src={item.src}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          onLoadedData={() => setIsLoaded(true)}
        />
      )}
      
      {item.type === 'gif' && (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          unoptimized={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-700" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
        {item.description && (
          <p className="text-white/80 text-xs">{item.description}</p>
        )}
      </div>
      
      {/* Media type indicator */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded uppercase">
          {item.type}
        </span>
      </div>
    </div>
  )
}

interface LightboxProps {
  item: MediaItem
  onClose: () => void
}

function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {item.type === 'image' && (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        )}
        
        {item.type === 'video' && (
          <video
            src={item.src}
            className="max-w-full max-h-full"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        )}
        
        {item.type === 'gif' && (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="max-w-full max-h-full object-contain"
            unoptimized={true}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        
        <div className="absolute -bottom-16 left-0 right-0 text-center text-white">
          <h3 className="font-semibold mb-1">{item.title}</h3>
          {item.description && (
            <p className="text-neutral-300 text-sm">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export function MediaGrid({ items }: MediaGridProps) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="break-inside-avoid mb-4">
            <MediaCard
              item={item}
              onClick={() => setSelectedItem(item)}
            />
          </div>
        ))}
      </div>
      
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  )
}