import "./App.css";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import CategoriesList from "./components/CategoriesList";
import { useState } from "react";
import CategorySelector from "./components/CategorySelector";
import CategoryHeading from "./components/CategoryHeading";

export interface ProductQuery {
  category: string | null;
  searchText: string | null;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <CategoriesList
            selectedCategory={productQuery.category}
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={5}>
          <CategoryHeading productQuery={productQuery} />
          <CategorySelector
            onSelectCategory={(category) =>
              setProductQuery({ ...productQuery, category })
            }
          />
          <ProductGrid productQuery={productQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
