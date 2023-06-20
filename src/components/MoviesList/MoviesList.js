// import { Link } from "react-router-dom";
import { List } from "./MoviesList.styles";
import { MovieListItem } from "../MovieListItem/MovieListItem";

export const MoviesList = ({movies}) => {
return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieListItem
            key={id}
            id={id}
            title={title}
            poster={poster_path}
          />
        );
      })}
    </List>
  );
}

// export default function MovieList({ movies }) {
//   return (
//     <List>
//       {movies.map(({ id, original_title, poster_path }) => {
//         return (
//           <MovieListItem
//             key={id}
//             id={id}
//             title={original_title}
//             poster={poster_path}
//           />
//         );
//       })}
//     </List>
//   );
// }


// import { Link } from "react-router-dom";
// import { Container, CardWrapper, ProductName } from "./ProductList.styled";

// export const MoviesList = ({ results }) => {
//   return (
//     <Container>
//       {results.map((result) => (
//         <CardWrapper key={result.id}>
//           <Link to={`${result.title}`}>
//             <img src="https://via.placeholder.com/200x100" alt="" />
//             <ProductName>{product.name}</ProductName>
//           </Link>
//         </CardWrapper>
//       ))}
//     </Container>
//   );
// };
