import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Products</Title>

      <div
        className="
  overflow-x-auto w-full mt-5"
      >
        <table
          className="w-full text-sm text-center text-gray-500
    min-w-[1000px]"
        >
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-3">
                PRODUCT ID
              </th>
              <th scope="col" className="py-3 px-3">
                CUSTUMER
              </th>
              <th scope="col" className="py-3 px-3">
                TOTAL
              </th>
              <th scope="col" className="py-3 px-3">
                PAYMENT
              </th>
              <th scope="col" className="py-3 px-3">
                STATUS
              </th>
              <th scope="col" className="py-3 px-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-secondary hover:bg-primary transition-all">
            <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                6346
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                Emin Basbayan
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
              19$
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
            Cash
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
            preparing
              </td>
              <td className="py-4 px-3 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-success">Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
