import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

export default function App() {
  const printRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Document",
    pageStyle: "",
  });
  const getPageMargins = () => {
    return `@page { margin: 0mm; size:auto; padding:20mm; }`;
  };
  return (
    // you can get multiple page pdf without any custom config though you can override its styling through print media query
    <>
      <h1>Select Save As PDF in print dialog</h1>
      <p>
        This project solves the react-to-print issue where the PDF generated
        texts are overlapping. It provides a clean and simple way to convert
        React content into a PDF file without any overlapping issues.
      </p>
      <br />
      <button onClick={handlePrint}>Download PDF</button>

      <div className="App" ref={printRef}>
        <style>{getPageMargins()}</style>
        <h1>You can Convert Multiple Page To PDF</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sequi
          incidunt quae id harum quibusdam eveniet quo, expedita laudantium ab
          est qui, cupiditate eum commodi error. Incidunt, veniam. Aperiam
          repudiandae repellendus iusto officia illo aut necessitatibus vitae
          nihil assumenda nisi in aliquid voluptates ipsum ipsam sapiente
          aliquam molestias minus reprehenderit modi, cumque doloremque!
          Accusamus consectetur vitae quod, illo necessitatibus delectus placeat
          eveniet aspernatur velit nesciunt laboriosam aut labore nobis soluta
          atque expedita ducimus? Nulla impedit repellendus, in nesciunt itaque
          rerum iusto eligendi error sunt corrupti cum voluptatum ipsam, laborum
          laboriosam aliquid hic sed soluta omnis neque voluptatibus? Id, eius
          nemo eos iste tempora aspernatur. Dolores, impedit, alias distinctio
          dolorem voluptates eos placeat iusto at laborum, asperiores vel
          blanditiis! Quas dolorem dicta sit totam aspernatur. Cumque accusamus
          laborum rem distinctio tempora quam illo architecto omnis cupiditate
          non. Odit iste quos enim asperiores, illo blanditiis excepturi ex
          facilis tenetur necessitatibus optio, quo atque ipsum deleniti
          doloribus amet laudantium dignissimos numquam eaque neque quae. Iusto,
          doloremque nemo. Commodi, qui eaque quis sint fugiat eligendi
          assumenda officia explicabo praesentium numquam doloremque tenetur in
          rem voluptatibus fuga vitae natus nemo repudiandae id sequi quae earum
          voluptatum. Dicta error non magni accusamus quibusdam laboriosam
          possimus, aperiam sint. Necessitatibus autem commodi pariatur impedit
          tempore. Quae velit assumenda ea facilis numquam amet aliquam incidunt
          neque, perferendis ratione hic nulla, aliquid sed veniam! Ea itaque
          cupiditate iusto nisi sunt quae optio expedita reiciendis facilis fuga
          animi asperiores repellendus, perferendis, distinctio consectetur
          quidem cumque maiores eum ducimus velit deleniti, quasi ad illum
          ullam? Reprehenderit, praesentium autem laudantium nostrum voluptas
          consequatur, adipisci, suscipit labore molestiae voluptates alias
          harum ea ullam architecto ex nihil? Nemo corporis libero fuga quam
          quasi possimus necessitatibus maiores saepe blanditiis adipisci autem
          voluptate officia asperiores incidunt consequatur nisi iure eum quo
          quisquam, sit tempore doloribus. Consectetur hic alias neque
          aspernatur ex quia ullam! Ipsum perferendis repellat eligendi officia
          similique obcaecati eum suscipit repellendus possimus minima tenetur
          culpa reiciendis, quos, eveniet voluptas dolor molestiae voluptates,
          numquam hic nemo aliquam consequuntur nihil ipsa et. Aperiam,
          reprehenderit! Fugiat dolor recusandae reiciendis. Inventore nam
          architecto quos ipsa magnam reprehenderit iure? Sapiente non natus
          optio ducimus atque, libero aut! Tenetur sapiente asperiores quisquam
          cum quidem alias accusantium et laboriosam eveniet soluta magni
          aliquam vero officia natus odio architecto, voluptatem voluptates
          libero eaque facilis nobis. Debitis fuga amet quasi quod beatae!
          Architecto repellendus dolor quasi alias laboriosam saepe, qui natus
          quisquam unde? Qui doloremque dicta quod fugit amet illum ex minus at
          rerum, temporibus, voluptatibus eos quam laborum maxime dolor
          molestias deserunt nisi magnam illo natus numquam asperiores. Culpa
          placeat veritatis fugit vero ad autem deleniti libero nisi!
          Necessitatibus quidem enim esse culpa impedit incidunt explicabo
          facilis dicta iure? Itaque accusantium mollitia nobis? Vero animi
          provident, facilis dignissimos vitae assumenda voluptatem! Minima quos
          consectetur voluptates, aliquid sint esse eum autem suscipit odio
          quisquam deserunt repellendus provident expedita quod dolorum
          repellat. Temporibus tempore dolor maxime excepturi porro accusamus
          aspernatur nostrum ut quidem expedita doloribus dolore fugiat iusto
          magnam, minima ratione dicta iure adipisci alias autem eum culpa.
          Soluta maxime expedita, repellendus magnam eveniet a minima eos
          voluptates, magni rem illum officia excepturi alias molestias in
          quisquam! Qui in, quia iure magnam tempora vero sunt natus rerum a
          blanditiis, quam recusandae exercitationem cum impedit quae corporis
          eligendi fugit id cupiditate sed! Ducimus eaque qui incidunt quaerat
          quod consectetur officiis accusantium optio animi magnam harum,
          corporis, voluptatibus eveniet dicta iure itaque alias mollitia?
          Ratione esse praesentium sed, impedit harum perspiciatis repudiandae
          temporibus a magnam aliquid ipsa quam quae ab maxime, in corrupti
          voluptatibus accusantium explicabo! Odio enim debitis tenetur quidem
          iure, corporis accusantium eius adipisci quaerat blanditiis beatae
          voluptatibus distinctio, ab repudiandae hic laboriosam ipsam!
          Blanditiis ratione aliquam inventore assumenda ea ipsa ipsum culpa, ab
          quaerat. Beatae ex error quae tenetur, harum obcaecati, magni vel
          dolor corporis eveniet nostrum reprehenderit, voluptas nam deleniti
          est accusantium fuga deserunt quos! Itaque vero ab iusto consequatur
          repellat eveniet iure nesciunt nihil est perspiciatis doloremque
          voluptas saepe fuga odio temporibus impedit voluptatibus odit
          recusandae deserunt quos, dolores officiis libero dignissimos!
          Laboriosam aperiam repellat iusto, quo officiis vel quisquam quia
          dignissimos labore cumque iste nesciunt tempora soluta laborum non
          voluptatem fugit alias optio neque aut sapiente et? Consequuntur odio
          assumenda ipsam, unde iste deserunt obcaecati delectus a? Maxime,
          laboriosam! Obcaecati, ipsum a. Sit molestias nemo harum vitae earum
          nostrum unde ducimus rem eos cumque dolores, exercitationem facere
          ipsa, quisquam sapiente vero consequuntur rerum magnam odit sed
          blanditiis! Neque nam voluptates, similique quisquam quas obcaecati
          beatae atque officia culpa quidem? Consequuntur incidunt quae fugiat
          non. Molestias facere veritatis fuga! Illo aperiam sint odit sequi
          ducimus, cupiditate, nesciunt asperiores itaque laborum, fugit
          repudiandae ipsam deserunt obcaecati excepturi corporis consequatur.
          Ipsa recusandae ad nihil aliquam. Harum modi delectus at esse dolores
          culpa alias beatae perferendis consequuntur labore vel ipsa sequi
          impedit, odit nemo nisi optio! Exercitationem sit magnam cum iste
          maxime quam voluptatibus mollitia qui asperiores consequatur dolorum
          dignissimos quae animi provident tempore eius dolor, totam dolore
          fugiat earum! Consectetur quidem ipsum repellendus itaque voluptate
          dolor numquam perspiciatis beatae sed nostrum neque nihil nulla culpa,
          a officiis commodi? Expedita neque asperiores tempora nam porro sunt,
          iste blanditiis explicabo quia, enim voluptate vitae recusandae dolore
          cum nobis. Quo mollitia accusantium, soluta, nobis maxime sint
          quibusdam atque sunt neque, eum rerum? Quas optio pariatur aliquam.
          Beatae asperiores ratione blanditiis, earum recusandae vitae fugit
          quasi omnis nesciunt autem rerum id quae, expedita voluptas odio.
          Voluptatibus magnam eaque, omnis deleniti laborum facilis quos
          voluptatem ab minima. Nobis sit suscipit necessitatibus aperiam
          veritatis quae impedit hic omnis fugit tempora accusamus rem dicta,
          consequatur nihil quam ipsa distinctio. Tempore adipisci doloribus
          laboriosam maiores aspernatur? Ipsam temporibus amet placeat rerum
          fuga. Obcaecati, ullam aspernatur cum fugiat minima temporibus ipsam.
          Delectus totam expedita veniam sit perferendis quidem cumque optio?
          Amet reiciendis saepe placeat repellat ipsum. Facilis dignissimos est
          dolorem deserunt sapiente fugiat voluptatum optio, illo, esse dolores
          porro aliquam quibusdam at, vitae eligendi quas delectus? Voluptas
          dolor cumque ratione accusantium odio cum perferendis eum ipsa
          architecto reiciendis non fuga beatae ad, aliquam soluta repellat
          quaerat aut quasi enim? Veniam molestiae inventore voluptate ullam?
          Tenetur molestias consequatur magnam nostrum, nam officiis! Sapiente
          deleniti fugit sed pariatur eaque deserunt perspiciatis quo culpa ipsa
          soluta facilis tenetur repudiandae, commodi doloribus reprehenderit
          laborum officiis ab quidem laboriosam. Consectetur sit ex non eaque
          iure officia hic sint repudiandae! Quam aliquam, perferendis omnis
          totam quas officia animi doloribus odio officiis qui ipsam rem! Quasi,
          culpa adipisci? Exercitationem dolore incidunt illo, alias qui libero
          veniam perferendis, expedita harum necessitatibus quos ex nesciunt
          quis laudantium doloremque excepturi sunt quasi. Libero laborum
          corrupti beatae unde fuga, laudantium aspernatur vel optio modi non.
          Quibusdam, quia. Quidem itaque culpa consectetur maiores dolorem
          libero aspernatur alias iusto perferendis at esse, voluptates, rem
          ipsum architecto deserunt dolores. Soluta voluptas vitae modi corrupti
          aspernatur quasi expedita unde quod. Architecto aliquid delectus
          accusamus placeat veniam fugiat totam ipsam molestiae. Quaerat
          praesentium voluptates ratione vitae, ut numquam earum nesciunt natus
          quos reprehenderit, quo inventore culpa optio sunt eius itaque veniam
          ad. Magni cum molestias dicta ducimus voluptatibus officiis minus est
          ipsa officia atque, expedita ipsum quis incidunt beatae fugiat quae
          sit nostrum possimus! Porro eius dignissimos enim, fuga libero alias
          est tempora. Ab consequuntur suscipit quod dicta quas!
        </p>
      </div>
    </>
  );
}
