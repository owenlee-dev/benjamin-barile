"use client";

import TrackList from "@/components/TrackList/TrackList";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  albumTracks,
  availableOnImages,
  musicianInfo,
  producerInfo,
} from "../data/album-info";

const WipeInImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      className="img-wrapper"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "contain" }} />
    </motion.div>
  );
};

export default function RecentRelease() {
  return (
    <section className="RecentRelease">
      <div className="flex">
        <div className="album-artwork">
          <Image alt="album cover" src="/album/album_cover.jpg" fill />
          <div className="artwork-placeholder"></div>
        </div>
        <div className="album-info">
          <label>Listen</label>
          <h3>ESPERANDO EL ALBA</h3>

          <div className="track-list-container">
            <TrackList tracks={albumTracks} />
          </div>
        </div>
      </div>
      <div className="available-on-container">
        <div className="flex-wrap">
          {availableOnImages.map((image, index) => (
            <WipeInImage key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
      <div className="music-info-container">
        <div className="music-info">
          {producerInfo.map((info) => (
            <ProducerInfo key={info.title} {...info} />
          ))}
        </div>
        <div className="music-info">
          {musicianInfo.map((info) => (
            <ProducerInfo key={info.title} {...info} />
          ))}
        </div>
      </div>
      <div className="nomination-info-container">
        <Image
          className="nomination-img"
          src="/album/folk-music-nomination.png"
          alt="album cover"
          fill
          style={{ objectFit: "contain" }}
        />
        <Image
          className="nomination-img"
          src="/album/ontario-arts-council.jpg"
          alt="album cover"
          fill
          style={{ objectFit: "contain" }}
        />
        <Image
          className="nomination-img"
          src="/album/toronto-arts-council.jpg"
          alt="album cover"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}

export interface ProducerInfoProps {
  title: string;
  name: string;
  subName?: string;
}
const ProducerInfo = ({ title, name, subName }: ProducerInfoProps) => {
  return (
    <div className="ProducerInfo">
      <span className="title">{title}</span>
      <div className="dashed-grow-divider"></div>
      <div className="name-container">
        <span className="name">{name}</span>
        {subName && <span className="sub-name">{subName}</span>}
      </div>
    </div>
  );
};
