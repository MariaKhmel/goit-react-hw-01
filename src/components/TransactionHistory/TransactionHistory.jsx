import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.cellData}>{type}</td>
            <td className={css.cellData}>{amount}</td>
            <td className={css.cellData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
