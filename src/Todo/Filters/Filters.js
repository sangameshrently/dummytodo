import React, { Component } from 'react';
import {  ButtonGroup, ToggleButton } from 'react-bootstrap';
class FiltersComponent extends Component {
    render() {
        let {setFilterType} = this.props;
        return (
            <div>
                    
                    <ButtonGroup toggle>
                        <ToggleButton type="checkbox" defaultChecked value="1" onChange={()=>{
                            setFilterType('ALL')
                        }}>
                            All
    </ToggleButton>
                    </ButtonGroup>

                    <ButtonGroup toggle>
                        <ToggleButton type="checkbox" defaultChecked value="1" onChange={()=>{
                            setFilterType("COMPLETED");
                            console.log('comming here');
                        }}>
                            Completed
    </ToggleButton>
                    </ButtonGroup>

                    <ButtonGroup toggle>
                        <ToggleButton type="checkbox" defaultChecked value="1" onChange={()=>{
                            setFilterType("NOT_COMPLETED");
                            console.log('comming here');
                        }}>
                            Uncompleted
    </ToggleButton>
                    </ButtonGroup>
                

            </div>
        );
    }
}

export const Filters = FiltersComponent
