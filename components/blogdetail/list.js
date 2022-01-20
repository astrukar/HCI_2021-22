export const Ol = (props) => <ol className="mb-16" {...props} />;

export const Li = (props) => (
  <li className="list-disc list-inside pl-3 pr-2.5 pl-2.5 lg:pl-16 font-montserrat text-base lg:w-9/12 mb-3">
    <span className="text-gray-700" {...props} />
  </li>
);
