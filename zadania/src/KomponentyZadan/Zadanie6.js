import { useState } from "react";

export default function Zadanie6() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const data = [
    {
      url: "https://catpaw.pl/wp-content/uploads/2024/09/Kot-Europjeski.png",
      category: "kot",
    },
    {
      url: "https://leopardus.pl/data/include/img/news/1689082690.jpg",
      category: "kot",
    },
    {
      url: "https://tueuropa.pl/uploads/articles_files/2021/11/05/6e7f9516-1948-d9e8-ca22-00007380aca5.jpg",
      category: "kot",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmuBLFgL_OiV1H1y8JA-Svmi0T1cgttLZcQ&s",
      category: "pies",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk4vwMTw98l30eB2uhMLQilkkEfFHjsabgKQ&s",
      category: "pies",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1DgkbyKSVR4pQBuhXMwcUUHe5FCAq04fJg&s",
      category: "pies",
    },
    {
      url: "https://matywechowe.pl/wp-content/uploads/2020/07/austin-kirk-QZenflkkwt0-unsplash-1-e1595260553256.jpg",
      category: "pies",
    },
  ];

  return (
    <div>
      <h2>Zadanie 6</h2>
      <div>
        {selectedCategory === "all"
          ? data.map((p, i) => (
              <img
                width="150px"
                height="150px"
                key={i}
                src={p.url}
                alt={p.category}
              />
            ))
          : data
              .slice()
              .filter((p) => p.category === selectedCategory)
              .map((p, i) => (
                <img
                  width="150px"
                  height="150px"
                  key={i}
                  src={p.url}
                  alt={p.category}
                />
              ))}
      </div>
      <button onClick={() => setSelectedCategory("all")}>All</button>
      <button onClick={() => setSelectedCategory("kot")}>Cat</button>
      <button onClick={() => setSelectedCategory("pies")}>Dog</button>
      <hr />
    </div>
  );
}
