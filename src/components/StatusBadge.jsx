/**
 * A reusable component to display a styled status badge.
 * @param {object} props - The component props.
 * @param {string} props.status - The status string ('draft', 'in_progress', 'completed').
 */

const StatusBadge = ({ status }) => {
  const statusConfig = {
    'in_progress': {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      border: 'border-yellow-200',
      label: 'In Progress'
    },
    'completed': {
      bg: 'bg-green-100',
      text: 'text-green-800',
      border: 'border-green-200',
      label: 'Completed'
    },
    'draft': {
      bg: 'bg-gray-100',
      text: 'text-gray-800',
      border: 'border-gray-200',
      label: 'Draft'
    }
  };

  const config = statusConfig[status] || statusConfig['draft'];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.bg} ${config.text} ${config.border}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;