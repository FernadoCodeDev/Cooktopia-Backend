import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { Articles } from "../ui/Modal";
import ArrowSVG from "../../assets/svg/ArrowSVG";

function ArticlesCooktopia() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedArticle, setSelectedArticle] = useState(null);

  const handleClick = (Article) => {
    setSelectedArticle(Article);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 max-w-[80rem] m-auto">
      {Articles.map((Article) => (
        <div
          className="relative grid items-center justify-center w-full h-auto grid-cols-1 p-2 bg-stone-800"
          key={Article.id}
          onClick={() => handleClick(Article)}
        >
          {/* T background */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-stone-800"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-between w-full h-full">
            <div className="flex flex-row justify-between w-full p-2">
              <h1 className="font-bold text-stone-200">{Article.Product}</h1>
              <div className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-stone-200">
                <ArrowSVG />
              </div>
            </div>

            {/* Image */}
            <img
              src={Article.image}
              alt={Article.name}
              className="w-full h-auto drop-shadow-2xl"
            />

            <div className="flex flex-row justify-between w-full p-2 ">
              <h1 className="font-bold text-stone-800">{Article.name}</h1>
              <p className=" text-stone-800">
                <span className="font-bold text-stone-800">$</span>
                {Article.price}
              </p>
            </div>
          </div>

          {/* b background */}
          <div className="absolute bottom-0 left-0 w-full h-[50%] bg-stone-200"></div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        Articles={SelectedArticle}
      />
    </div>
  );
}

export default ArticlesCooktopia;