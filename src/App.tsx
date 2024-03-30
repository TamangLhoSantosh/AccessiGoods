import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import CategoriesList from "./components/CategoriesList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} minWidth={200}>
          <CategoriesList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <ProductGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
