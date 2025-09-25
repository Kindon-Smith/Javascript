// imports
import ReactNode from 'react';

// interface
interface WidgetProperties {
    title: string;
    children: React.ReactNode;
    isLoading?: boolean;
    onRefresh?: () => void;
}

// component
function Widget({ title, children, isLoading, onRefresh }: WidgetProperties) {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3>{title}</h3>
        {onRefresh && (
            <button onClick={onRefresh}
                className="widget-refresh-button"
                aria-label={`Refresh ${title}`}>
                    Refresh
            </button>
        )}
      </div>
      <div className="widget-content">
        {isLoading ? <p>Loading...</p> : children}
      </div>
    </div>
  );
}

export default Widget;