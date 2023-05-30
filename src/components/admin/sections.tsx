import { useState } from "react";

const languagesData = ["Python", "Javascript", "Go", "C++", "C#", "C"];

const Sections = () => {
  const [languages, setLanguages] = useState("");
  return (
    <div>
      <form>
        <fieldset>
          <select name="topic" id="">
            {languagesData.map((lang, index) => (
              <option value={lang} key={index}>
                {lang}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="order"
            placeholder="select order number"
            min={0}
            max={50}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Sections;