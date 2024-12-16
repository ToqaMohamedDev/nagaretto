'use client';
import PreLoader from "@/components/preloader/PreLoader";
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <>
      <PreLoader  />
      <div>
          <Header />
      </div>
    </>
  );
}

/*
git init
git add .
git commit -m "first43"
git branch -M main
git remote add origin https://github.com/ToqaMohamedDev/nagaretto.git
git push -u origin main
*/