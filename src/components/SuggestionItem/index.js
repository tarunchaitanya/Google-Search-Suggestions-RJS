// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, updateSearchInput} = props
  const {suggestion} = suggestionsDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-content">{suggestion}</p>
      <button
        type="button"
        className="arrow-buttom"
        onClick={onClickSuggestion}
      >
        <img
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
