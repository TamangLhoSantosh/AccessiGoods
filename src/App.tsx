import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import CategoriesList from "./components/CategoriesList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <CategoriesList
            onSelectCategory={(category) =>
              setSelectedCategory("/category/" + category)
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <ProductGrid selectedCategory={selectedCategory} />
      </GridItem>
    </Grid>
  );
}

export default App;
