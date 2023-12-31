import './SearchPanel.css';

const SearchPanel = (props) => 
{
    return(
        <>
            {/* <label htmlFor="set-name">Name of MTG Set</label>
            <input type="text" id="set-name" name="set-name" minLength="25" maxLength="50" />
            <button id="set-name-button" onClick={props.onSearchClick} >Search Set Name</button> */}
            <label htmlFor="card-name">Name of MTG Card</label>
            <input type="text" id="card-name" name="card-name" minLength="15" maxLength="25" />
            <button id="card-name-button" onClick={props.onSearchClick} >Search Card Name</button>
            <label htmlFor="set-code">Code of MTG Set</label>
            <input type="text" id="set-code" name="set-code" minLength="3" maxLength="8"></input>
            <button id="set-code-button" onClick={props.onSearchClick} >Search Set Code</button>
            <div className='SearchControls'>
                <p>Cards to display:</p>
                <select onChange={props.onSelectCounter}>
                    <option value="5"> 5 </option>
                    <option value="10"> 10 </option>
                    <option value="25"> 25 </option>
                    <option value="50"> 50 </option>
                </select>
                <button disabled={props.buttonDisabled} onClick={props.onReloadResults} id="reload-button">Reload</button>
                <button disabled={props.buttonDisabled} onClick={props.onTogglePage} id='prev-button'>Previous</button>
                <button disabled={props.buttonDisabled} onClick={props.onTogglePage} id='next-button'>Next</button>
            </div>    
        </>
    );
}

export default SearchPanel;