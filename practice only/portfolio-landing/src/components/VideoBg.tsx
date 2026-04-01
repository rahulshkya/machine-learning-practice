import React, { useRef, useEffect, useState } from 'react'
import Hls from 'hls.js'

interface VideoBgProps {
  src: string
  overlay?: 'light' | 'heavy'
  flipped?: boolean
}

export const VideoBg: React.FC<VideoBgProps> = ({ src, overlay = 'light', flipped = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          setIsPlaying(false)
        })
        setIsPlaying(true)
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      video.play().catch(() => {
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }, [src])

  const overlayClass = overlay === 'heavy' ? 'bg-black/60' : 'bg-black/20'

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ${
          flipped ? 'scale-y-[-1]' : ''
        }`}
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
    </>
  )
}
