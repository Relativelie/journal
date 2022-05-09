import { FC } from 'react';
import filterImage from '../../../assets/images/filterImage.png';
import { FilterObj } from '../../../types/filterTypes';
import './TableHead.scss';

type Props = {
  filtering: Function;
  allFilters: FilterObj[];
  activeFilter: string;
};

export const TableHead: FC<Props> = ({
    filtering,
    allFilters,
    activeFilter,
}) => {
    return (
        <thead>
            <tr>
                {allFilters.map((item) => {
                    const { id, attributeName, headName } = item;
                    let imgClassName = '';
                    if (attributeName === activeFilter) {
                        imgClassName = 'tableHead__content_activeFilter';
                    }
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
                                data-testid="table head"
                                role="button"
                                tabIndex={0}
                            />
                            <div className="tableHead__content">
                                <p className="tableHead__content__par">{headName}</p>
                                <img className={imgClassName} src={filterImage} alt="filter" />
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};
