  'uee client'

interface TextProps{
  text:string,
  classNameAll:string,
  classNameCarc:string,
}
export default function TextSplit({text,classNameAll,classNameCarc}:TextProps) {
  return (
    <div
    className={classNameAll}
    >
      {text.split('').map((chrac,index)=>{
       return <div
       className={classNameCarc}
       key={index}
       >
        {chrac + '\u00A0'}
       </div>
      })}  
    </div>
  )
}
