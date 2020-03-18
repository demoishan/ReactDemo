import React, { useState, useContext, useEffect } from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Media } from 'react-bootstrap';

import { getuserlist } from '../../services/userservice';

import { layoutWrapper } from '../../HOCs/LayoutWrapper';

import { LoaderContext } from '../../Contexts/LoaderContext'

function UserList(props) {

    const setLoader = useContext(LoaderContext).toggleLoader;

    const [gridState, setGridState] = useState({ skip: 0, take: 5, total: 0 });
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState("");

    function pageChange(event) {
        setGridState({
            ...gridState,
            skip: event.page.skip
        });
        let page = Math.floor(gridState.skip / gridState.take) + 1;
        getuserlist(page, gridState.take)
            .then(
                (result) => {
                    setLoader(false);
                    if (result && result.data) {
                        setGridState({
                            ...gridState,
                            total: result.total
                        });
                        setUserList(result.data);
                    } else {
                        setError("Sorry...Could not able to find user details.");
                    }
                })
            .catch(
                (error) => {
                    setLoader(false);
                    setError("Sorry...Could not able to find user details.");
                }
            )
    }

    useEffect(() => {
        setLoader(true);
        let page = Math.floor(gridState.skip / gridState.take) + 1;
        getuserlist(page, gridState.take)
            .then(
                (result) => {
                    setLoader(false);
                    if (result && result.data) {
                        setGridState({
                            ...gridState,
                            total: result.total
                        });
                        setUserList(result.data);
                    } else {
                        setError("Sorry...Could not able to find user details.");
                    }
                })
            .catch(
                (error) => {
                    setLoader(false);
                    setError("Sorry...Could not able to find user details.");
                }
            )
    }, [])

    function FullName(props) {
        return <td>{props.dataItem.first_name + " " + props.dataItem.last_name}</td>
    }

    function UserAvatar(props) {
        return (
            <td>
                <Media>
                    <img src={props.dataItem.avatar} width="60" className="avatar"
                        alt={props.dataItem.first_name + " " + props.dataItem.last_name} />
                </Media>
            </td>
        );
    }

    return (
        <div>
            <Grid
                data={userList}
                skip={gridState.skip}
                take={gridState.take}
                total={gridState.total}
                pageable={true}
                onPageChange={(e) => pageChange(e)}
            >
                <GridColumn field="id" title="Id" />
                <GridColumn field="avatar" cell={UserAvatar} />
                <GridColumn title="Name" cell={FullName} />
                <GridColumn field="email" title="Email" />
            </Grid>
        </div >
    );
}

export default layoutWrapper(UserList);