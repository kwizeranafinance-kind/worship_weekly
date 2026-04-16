'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { RADIO_PLAYLIST } from '@/lib/constants';

export default function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const currentTrack = RADIO_PLAYLIST[currentTrackIndex];
  const nextTracks = RADIO_PLAYLIST.slice(currentTrackIndex + 1, currentTrackIndex + 3);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl;
      if (isPlaying) audioRef.current.play();
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSkipNext = () => {
    setCurrentTrackIndex((i) => (i + 1) % RADIO_PLAYLIST.length);
  };

  const handleSkipPrev = () => {
    setCurrentTrackIndex((i) => (i - 1 + RADIO_PLAYLIST.length) % RADIO_PLAYLIST.length);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    if (isMuted && volume > 0) setIsMuted(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    handleSkipNext();
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-b from-lavender-50 to-gold-50 rounded-2xl shadow-2xl overflow-hidden border border-gold-200">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onWaiting={() => setIsBuffering(true)}
        onCanPlay={() => setIsBuffering(false)}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-gold-700 to-gold-600 text-white px-6 py-4">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">📻</span>
          <h1 className="text-lg font-bold">Worship Weekly Radio</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            24/7 RADIO
          </div>
        </div>
      </div>

      {/* Album Art */}
      <div className="relative bg-gradient-to-br from-gold-100 to-gold-50 px-6 py-8">
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white">
          <img
            src={currentTrack.artworkUrl}
            alt={currentTrack.title}
            className="w-full h-full object-cover"
          />
          {isBuffering && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="animate-spin">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Song Info */}
      <div className="px-6 py-4 bg-white text-center border-b border-gold-100">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{currentTrack.title}</h2>
        <p className="text-sm text-gray-600 mb-1">{currentTrack.artist}</p>
        <p className="text-xs text-gold-600 font-medium">{currentTrack.album}</p>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-gradient-to-b from-white to-gold-50 border-b border-gold-100">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-2 bg-gold-200 rounded-lg appearance-none cursor-pointer accent-gold-700"
          style={{
            background: `linear-gradient(to right, rgb(217, 119, 6) 0%, rgb(217, 119, 6) ${
              (currentTime / (duration || 1)) * 100
            }%, rgb(253, 230, 138) ${(currentTime / (duration || 1)) * 100}%, rgb(253, 230, 138) 100%)`,
          }}
        />
        <div className="flex justify-between mt-2 text-xs text-gray-600 font-medium">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="px-6 py-6 bg-white border-b border-gold-100">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={handleSkipPrev}
            className="p-3 rounded-full hover:bg-gold-100 transition text-gold-700 hover:text-gold-900"
            aria-label="Previous track"
          >
            <SkipBack className="w-5 h-5" />
          </button>

          <button
            onClick={handleTogglePlay}
            className="p-4 rounded-full bg-gradient-to-br from-gold-600 to-gold-500 text-white shadow-lg hover:shadow-xl hover:from-gold-700 hover:to-gold-600 transition transform hover:scale-105"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current" />
            )}
          </button>

          <button
            onClick={handleSkipNext}
            className="p-3 rounded-full hover:bg-gold-100 transition text-gold-700 hover:text-gold-900"
            aria-label="Next track"
          >
            <SkipForward className="w-5 h-5" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gold-50 rounded-lg">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-gold-700 hover:text-gold-900 transition"
            aria-label="Toggle mute"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-gold-200 rounded-lg appearance-none cursor-pointer accent-gold-700"
            aria-label="Volume"
          />
          <span className="text-xs text-gray-600 font-medium w-8 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
      </div>

      {/* Next Up Playlist */}
      <div className="px-6 py-4 bg-gold-50 border-t border-gold-100">
        <h3 className="text-xs font-bold text-gold-900 uppercase tracking-wider mb-3">Next Up</h3>
        <div className="space-y-2">
          {nextTracks.length > 0 ? (
            nextTracks.map((track, idx) => (
              <div key={track.id} className="flex items-start gap-3 p-2 rounded hover:bg-white transition">
                <span className="text-xs font-bold text-gold-600 mt-0.5">{idx + 2}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{track.title}</p>
                  <p className="text-xs text-gray-600 truncate">{track.artist}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">{formatTime(track.duration)}</span>
              </div>
            ))
          ) : (
            <p className="text-xs text-gray-500 italic">No tracks in queue</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-white text-center border-t border-gold-100">
        <p className="text-xs text-gray-500">
          🎵 Worship music for the soul • {RADIO_PLAYLIST.length} tracks in rotation
        </p>
      </div>
    </div>
  );
}
