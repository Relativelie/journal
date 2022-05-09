import { FC } from 'react';
import './TableBody.scss';

type Props = {
    paginatedContent: any[]
};

export const TableBody: FC<Props> = ({ paginatedContent }) => {
    return (
        <tbody>
            {paginatedContent.map((item) => {
                const { id, title, body } = item;
                return (
                    <tr
                        className="tableBody"
                        key={`tableItem-${id}`}
                    >
                        <td className="tableBody__item tableBody__item_id">{id}</td>
                        <td className="tableBody__item">{title}</td>
                        <td className="tableBody__item">
                            <div>{body}</div>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    );
};
