import discord from "./discord.jpg";
import instagram from "./instagram.jpg";
import message from "./message.jpg";

const [
  people,
  background_img,
  sparkle_sm,
  sparkle,
  photographer,
  people_2,
  trending,
  rectangle10,
  rectangle14,
  rectangle15,
  rectangle29,
] = [
  "people.png",
  "background-img.png",
  "sparkle-sm.png",
  "sparkle.png",
  "photographer.png",
  "people-2.png",
  "trending_flat_black_24dp 1.png",
  "Rectangle 10.png",
  "Rectangle 14.png",
  "Rectangle 15.png",
  "Rectangle 29.png",
].map((key) => {
  const url =
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023week2";
  return `${url}/${key}`;
});

export {
  people,
  background_img,
  sparkle_sm,
  sparkle,
  photographer,
  people_2,
  trending,
  rectangle10,
  rectangle14,
  rectangle15,
  rectangle29,
  discord,
  instagram,
  message,
};
