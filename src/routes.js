import { HashRouter, Route, Routes } from "react-router-dom";

import VHome from "./views/v-home/v-home";
import VDashing from "./views/models/dashing/v-dashing";
import VX70 from "./views/models/x70/v-x70";
import VX70Plus from "./views/models/x70-plus/v-x70-plus";
import VX90Plus from "./views/models/x90-plus/v-x90-plus";
import VT2 from "./views/models/t2/v-t2";
import VLocations from "./views/v-locations/v-locations";
import VAfterSales from "./views/v-after-sales/v-after-sales";
import VNews from "./views/v-news/v-news";
import VArticle01 from "./views/articles/v-article-01/v-article-01";
import VArticle02 from "./views/articles/v-article-02/v-article-02";
import VArticle03 from "./views/articles/v-article-03/v-article-03";
import VArticle04 from "./views/articles/v-article-04/v-article-04";
import VArticle05 from "./views/articles/v-article-05/v-article-05";
import VContact from "./views/v-contact/v-contact";
import VQuotation from "./views/v-quotation/v-quotation";

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<VHome />} />
        <Route path="/modelos/dashing" element={<VDashing />} />
        <Route path="/modelos/x70" element={<VX70 />} />
        <Route path="/modelos/x70-plus" element={<VX70Plus />} />
        <Route path="/modelos/x90-plus" element={<VX90Plus />} />
        <Route path="/modelos/t2" element={<VT2 />} />
        <Route path="/encuentrame" element={<VLocations />} />
        <Route path="/post-venta" element={<VAfterSales />} />
        <Route path="/novedades" element={<VNews />} />
        <Route
          path="/novedades/marti-presenta-jetour"
          element={<VArticle01 />}
        />
        <Route
          path="/novedades/la-novedad-grupo-marti"
          element={<VArticle02 />}
        />
        <Route
          path="/novedades/grupo-marti-presentan-marca-vehiculo"
          element={<VArticle03 />}
        />
        <Route
          path="/novedades/nueva-propuesta-grupo-marti"
          element={<VArticle04 />}
        />
        <Route
          path="/novedades/lidom-grupo-marti-firma-alianza"
          element={<VArticle05 />}
        />
        <Route path="/contacto" element={<VContact />} />
        <Route path="/cotizar/:model" element={<VQuotation />} />
      </Routes>
    </HashRouter>
  );
};

export default Routers;
