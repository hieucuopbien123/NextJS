import Head from "next/head";
import Layout from "../components/Layout";

// Atomic Design: đây là khi thiết kế chỉ 1 page
// Khi dự án lớn dần. Phần atom và molecules được tái sử dụng rất nhiều và phần organism và template là thứ nằm trong từng folder page
export default function Home() {
  return (
    <div>
      <Head>
        <title>The Coolest Blog Ever</title>
      </Head>
      <Layout />
    </div>
  );
}