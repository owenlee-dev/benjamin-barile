"use client";
import { IoPlay, IoPlayOutline } from "react-icons/io5";
import "./styles.scss";
import { motion, useInView } from "framer-motion";
import { ImPlay2 } from "react-icons/im";
import { useRef } from "react";

interface Track {
  title: string;
  link?: string;
}

interface TrackListProps {
  tracks: Track[];
}

const TrackList = ({ tracks }: TrackListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleClick = (link?: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ul className="TrackList" ref={ref}>
      {tracks.map((track, index) => (
        <motion.li
          onClick={() => handleClick(track.link)}
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.1 }}
          className="track-item"
          style={{ cursor: track.link ? "pointer" : "default" }}
        >
          <span className="track-number">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <ImPlay2 className="play-button" role="button" />
          <span className="track-title">{track.title}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default TrackList;
