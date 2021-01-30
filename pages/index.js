import FiltersOverview from "../components/FiltersOverview";
export default function Home() {
  // console.log(data)

  return (
    <div>
      <FiltersOverview />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://api.spacexdata.com/v3/launches?limit=100')
//   const data = await res.json()

//   return {
//     props: {
//       data
//     }
//   }
// }
