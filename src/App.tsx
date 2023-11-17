import "./App.css";
import { Router } from "./lib/router";
import { Layout } from "./component/@layout/Layout";
import { Header } from "./component/@layout/Header";
import { Drawer } from "./component/@layout/Drawer";
import * as PAGE from "../src/lib/router/constant";

const menuData = [{ id: PAGE.SIGN_IN, path: PAGE.SIGN_IN, name: "로그인" }];
function App() {
  return (
    <Layout>
      <Header></Header>
      <Drawer>
        <Drawer.Button />
        <Drawer.Sider>
          <Drawer.Menu data={menuData} />
        </Drawer.Sider>
      </Drawer>
      <Router />
    </Layout>
  );
}

export default App;
