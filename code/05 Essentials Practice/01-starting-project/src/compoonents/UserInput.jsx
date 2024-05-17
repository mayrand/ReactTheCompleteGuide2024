export default function () {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initial_investment">INITIAL INVESTMENT:</label>
                <input type="number" id="initial_investment" name="initial_investment"/>
            </p>
            <p>
                <label htmlFor="annual_investment">ANNUAL INVESTMENT:</label>
                <input type="number" id="annual_investment" name="annual_investment"/>
            </p>
        </div>

        <div className="input-group">
            <p>
                <label htmlFor="expected_return">EXPECTED RETURN:</label>
                <input type="number" id="expected_return" name="expected_return"/>
            </p>
            <p>
                <label htmlFor="duration">DURATION:</label>
                <input type="number" id="duration" name="duration"/>
            </p>
        </div>

    </section>
}