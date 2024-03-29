import styled from "styled-components"

export const TabHead = styled("div")`
  border-bottom: 1px solid black;
  display: flex;
  background: black;
`
export const TabContainer = styled("div")`
  width: 30em;
  height: 30em;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`
export const TabBody = styled("div")`
  height: 100%;
`
export const Tab = styled("div")`
  padding: 1em;
  background: ${({ selected }) => (selected ? "grey" : "black")};
  * {
    color: white;
  }
`