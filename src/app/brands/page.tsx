import Banner from "../_components/banner/banner";
import GridCard from "../_components/grid-cards/grid-cards";
import Banner2 from "../_components/banner2/banner2";
import Header from "../_components/global/header";
import BlogCard from "../_components/card/blog-card";
import NewCard from "../_components/new-card/newCard";
import {brandsData} from '../_components/articles/brands-data'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands",
};

const Brands = () => {
  const section = 'brands';
  return (
    <div className='flex flex-col gap-12 h-auto'>
      {/* Main Banner */}
      <Banner label='Brands' />

      {/* Responsive Banner 2 */}
      <div className='px-4 md:px-[100px] lg:px-[250px]'>
        <Banner2 check='b' articleImage={brandsData[Math.floor(Math.random()*brandsData.length)].imgUrl} headingText={brandsData[Math.floor(Math.random()*brandsData.length)].title} section={section} />
      </div>

      {/* Header for Brands */}
      <Header label='BRANDS' />
      
      {/* New Card Section */}
      <NewCard data={brandsData} section={section} />

      {/* Header for Content Creation */}
      <Header label='CONTENT CREATION' />

      {/* Blog Card Section */}
      <div className='px-1'>
        <BlogCard data={brandsData} section={section} />
      </div>

      {/* Header for Trends */}
      <Header label='Trends' />
      
      <div className='px-1]'>
        <BlogCard data={brandsData} section={section} />
      </div>

      {/* Influencer Marketing Section */}
      <Header label={`WHAT's MORE`} />
      
      {/* Grid Cards */}
      <div className='px-1'>
        <GridCard data={brandsData} section={section} />
      </div>
    </div>
  );
};

export default Brands;
