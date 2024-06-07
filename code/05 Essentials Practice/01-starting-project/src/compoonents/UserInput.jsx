export default function ({userInput, onChange}) {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initial_investment">INITIAL INVESTMENT:</label>
                <input type="number" id="initial_investment" name="initial_investment"
                       value={userInput.initialInvestment}
                       onChange={(e) => {
                           onChange('initialInvestment', e.target.value)
                       }}
                />
            </p>
            <p>
                <label htmlFor="annual_investment">ANNUAL INVESTMENT:</label>
                <input type="number" id="annual_investment" name="annual_investment"
                       value={userInput.annualInvestment}
                       onChange={(e) => {
                           onChange('annualInvestment', e.target.value)
                       }}
                />
            </p>
        </div>

        <div className="input-group">
            <p>
                <label htmlFor="expected_return">EXPECTED RETURN:</label>
                <input type="number" id="expected_return" name="expected_return" value={userInput.expectedReturn}
                       onChange={(e) => {
                           onChange('expectedReturn', e.target.value)
                       }}
                />
            </p>
            <p>
                <label htmlFor="duration">DURATION:</label>
                <input type="number" id="duration" name="duration" value={userInput.duration}
                       onChange={(e) => {
                           onChange('duration', e.target.value)
                       }}
                />
            </p>
        </div>

    </section>
}