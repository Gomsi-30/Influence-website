
type HeaderProps = {
   label: string;
 }
 
 const Header = ({ label }:HeaderProps) => {
   return (
     <div className='hh mt-[52px] lg:mt-[60px] flex justify-center items-center border-t-[2px] border-b-[2px] py-9'>
       <div className='font-bold text-2xl md:text-3xl lg:text-4xl'>
         {label}
       </div>
     </div>
   );
 }
 
 export default Header;
 