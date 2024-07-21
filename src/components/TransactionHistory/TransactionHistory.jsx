import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.heading}>Type</th>
          <th className={css.heading}>Amount</th>
          <th className={css.heading}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={css.row} key={item.id}>
              <td className={css.dataType}>{item.type}</td>
              <td className={css.data}>{item.amount}</td>
              <td className={css.data}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
