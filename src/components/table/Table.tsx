import { ReactNode, FC } from 'react';
import './Table.scss';

type Props = {
    children: ReactNode
};

export const Table:FC<Props> = ({ children }) => {
    return (
        <main>
            <table className="table">
                {children}
            </table>
        </main>
    );
};
