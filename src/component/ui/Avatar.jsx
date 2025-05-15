export function Avatar({ name }) {
  const initials = name
    ?.split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className="
        w-[50px]
        h-[50px]
        rounded-full
        flex
        items-center
        justify-center
        font-semibold
        text-base
        text-white
        leading-[100%]
        tracking-[0px]
        bg-[#1F296A]
        p-[2px]
        [background:linear-gradient(90deg,_#C85ED8_0%,_#A079F8_70.57%)]
      "
    >
      <div className="
        w-full
        h-full
        rounded-full
        bg-[#3F51B5]
        flex
        items-center
        justify-center
      ">
        {initials}
      </div>
    </div>
  );
}