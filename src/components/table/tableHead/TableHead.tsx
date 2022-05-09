import { FC } from 'react';
import filterImage from '../../../assets/images/filterImage.png';
import './TableHead.scss';

type Props = {
    filtering: Function,
    allFilters: any[],
};

export const TableHead: FC<Props> = ({ filtering, allFilters }) => {
    return (
        <thead>
            <tr>
                {allFilters.map(((item) => {
                    const { id, attributeName, headName } = item;
                    return (
                        <th
                            key={`tableHeadItem-${id}`}
                            className={`tableHead ${attributeName}`}
                        >
                            <div
                                className="tableHead__filteringBtn"
                                aria-label="filter values"
                                onClick={(e) => filtering(e.target)}
                                onKeyUp={(e) => filtering(e.target)}
                                data-filterby={attributeName}
                                role="button"
                                tabIndex={0}
                            />
                            <div className="tableHead__content">
                                <p className="tableHead__content__par">{headName}</p>
                                <img src={filterImage} alt="filter" />
                            </div>
                        </th>
                    );
                }))}
            </tr>
        </thead>

    );
};
