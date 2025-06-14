import React from "react";
import "./styles.scss";
import Image from "next/image";

const Bio = () => {
  return (
    <div className="Bio section-wrapper">
      <Image
        src="/bio/walking-ben.jpg"
        alt="walking ben"
        style={{ objectFit: "cover" }}
        height={500}
        width={500}
      />

      <div className="bio-text-container">
        <h3 className="display-font">Benjamin Barrile | Bio</h3>
        <p className="text-wrapper">
          Rooted in the traditions of flamenco, Toronto born guitarist Benjamin
          Barrile prefers to speak through his instrument, expressing emotion
          without words. A remarkable soloist, Benjamin also excels as both an
          accompanist and composer. His compositions are dynamic and progressive
          while still honouring the enduring Spanish Roma tradition, evolving it
          with contemporary flair.
          <br />
          <br />
          In 2000 Benjamin set off to Spain for the first time, a country that
          had long captivated his imagination, in search of flamenco and what
          would become a quest that would profoundly shape his artistic
          trajectory. He travelled to one of the major centres of flamenco in
          Spain today, Jerez de la Frontera, where he studied under many great
          maestros. Back home in Toronto, Benjamin attributes a significant
          portion of his flamenco guitar skills and compositional training to
          Miguel de la Bastide. <br />
          <br />
          In recent years, Benjamin has performed and recorded for many artists
          and groups, including Tamar Ilana & Ventanas, Gustaü & Puente del
          Diablo, The Café Olé and Pamel Mancebo. Benjamin also actively works
          as a music producer and c0-composer for Ana Lía. In addition to
          leading his project, Benjamin is also a resident guitarist at
          Toronto-based Esmeralda Enrique Spanish Dance Company and Compañia
          Carmen Romero. Notably, he performed in the North American premiere of
          Don Quixote with the National Ballet of Canada. Benjamin is also the
          recipient of two Dora Mavor Moore Awards for Outstanding Sound
          Design/Composition, one of which he shares with flamenco guitarist
          Caroline Planté. He also has a 2020 Canadian Folk Music Award
          nomination for Instrumental Solo Artist of the Year. <br />
          <br />
          Benjamin&apos;s debut album &apos;Esperando el Alba&apos;
          (&apos;Waiting for Dawn&apos;) reflects upon his long and arduous
          battle with musician&apos;s focal dystonia, an all too often
          career-ending neurological condition for many musicians.
        </p>
      </div>
    </div>
  );
};

export default Bio;
