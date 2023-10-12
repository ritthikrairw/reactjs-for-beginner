// import default fuction

import { BlogItem, BlogItemProps } from "@/components/blog-item/blog-item";
import classNames from "classnames";

const blogItems: BlogItemProps[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1696928634052-41aa345ef686?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1693801873499-0b870dfca80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1693801873499-0b870dfca80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1693801873499-0b870dfca80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1693801873499-0b870dfca80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1693801873499-0b870dfca80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    title: "My first blog",
    categoryName: "ReactJS",
    author: {
      avatar:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ritthikrai (Champ) Wiengchai",
    },
    date: new Date(),
  },
];

export default function Home() {
  return (
    <main className='container'>
      <h1>Home</h1>
      <div className='grid grid-cols-12 gap-4'>
        {blogItems &&
          blogItems.length > 0 &&
          blogItems.map((item, index) => (
            <BlogItem
              className={classNames("col-span-4", {
                "col-span-6": index < 2,
              })}
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              categoryName={item.categoryName}
              author={item.author}
              date={item.date}
            />
          ))}
      </div>
    </main>
  );
}
