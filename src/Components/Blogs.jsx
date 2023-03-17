import React from "react";
import FontSizeChanger from "react-font-size-changer";
import { useState, useEffect } from "react";
import TextToSpeech from "./TextToSpeech";
import datas from "../assets/blogs.json";
import {useLocation} from "react-router-dom"


function Blogs() {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    },[])
    const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  const [ourText, setOurText] = useState("");
  const msg = new SpeechSynthesisUtterance();
  msg.rate = 0.8;

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };
  return (
    <div>
        {datas.map((data) =>
      <article className="max-w-5xl px-4 py-24 mx-auto space-y-12">
        <div className="w-full mx-auto space-y-4 text-center">
          <a
            href="#"
            class="relative z-10 rounded-full bg-gray-300 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-300"
          >
            Self-care
          </a>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">{location.state.title}</h1>
          <p className="text-sm text-black">
            by &nbsp;
            <span itemprop="name">{}</span>
            &nbsp;on&nbsp;
            <time datetime="2021-02-12 15:34:18-0200">{}</time>
          </p>
        </div>
        <div className="text-center">
          <button
            type="button"
            class="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={increaseFontSize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5h-2M18 7l-5 5.07l1.41 1.43L17 10.9V17h2v-6.1l2.59 2.6L23 12.07L18 7Z"
              />
            </svg>
          </button>
          <button
            type="button"
            class="text-white bg-gray-800 focus:ring-1 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={decreaseFontSize}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.12 14L7.5 7.67L9.87 14M6.5 5L1 19h2.25l1.12-3h6.25l1.13 3H14L8.5 5h-2M18 17l5-5.07l-1.41-1.43L19 13.1V7h-2v6.1l-2.59-2.6L13 11.93L18 17Z"
              />
            </svg>
          </button>
          <TextToSpeech
            text={
              "Life can be tough sometimes, with its ups and downs, and its easy to get caught up in the negative aspects of it. But no matter how difficult things may seem, there is always something to be grateful for. Gratitude is a powerful emotion that has the ability to transform our lives. It allows us to focus on the positive aspects of our lives and to appreciate what we have rather than focusing on what we lack. Research has shown that practicing gratitude can improve our overall well-being, including our physical and mental health, relationships, and work satisfaction. There are many things in our lives that we can be grateful for, from the simple pleasures to the significant milestones. Here are some examples: Good health: Being healthy is something we often take for granted, but its a blessing that we should be grateful for. Having good health allows us to live life to the fullest and to pursue our dreams and goals. Supportive relationships: Having people in our lives who love and support us is another thing to be grateful for. Whether its family, friends, or colleagues, having a support system can help us navigate the challenges of life. Basic necessities: Having access to food, shelter, and clean water is something that many people around the world lack. Being able to meet our basic needs is a privilege that we should be grateful for. Opportunities for growth: Life is full of opportunities for growth and learning. Whether its through education, travel, or new experiences, these opportunities can help us become better versions of ourselves. Small moments of joy: Its often the small moments of joy that make life worth living. Whether its a beautiful sunset, a good book, or a warm hug, taking the time to appreciate these moments can bring us happiness and gratitude. Practicing gratitude doesnt mean ignoring the challenges and difficulties of life. Instead, it means acknowledging the good things in our lives and focusing on them, even when things are tough. Here are some tips for cultivating gratitude: Keep a gratitude journal: Take a few minutes each day to write down three things youre grateful for. This can help you focus on the positive aspects of your life and cultivate a sense of gratitude. Express gratitude to others: Take the time to thank the people in your life who have made a difference. Whether its a heartfelt thank-you note or a simple thank you, expressing gratitude to others can strengthen relationships and increase happiness. Practice mindfulness: Paying attention to the present moment can help us appreciate the small things in life and cultivate a sense of gratitude. Mindfulness practices such as meditation or deep breathing can help us stay present and focused. In conclusion, theres always something to be grateful for, no matter how difficult life may seem. Taking the time to appreciate the good things in our lives can help us cultivate a sense of gratitude and increase our overall well-being. So, lets take a moment to be thankful for the blessings in our lives, big and small, and focus on the positive aspects of life."
            }
          />
        </div>

        <div className="text-black">
          <p
            className="text-justify"
            value="msg"
            id="blog-content"
            style={{ fontSize: `${fontSize}px` }}
          >
            {}
          </p>
        </div>
      </article>
      )}
    </div>
  );
}

export default Blogs;
