import styled from 'styled-components'

export const FeatureSection = styled.section`
margin-top: 6em;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
gap: 20px;
padding:1rem;

`
export const FeatureTitle = styled.h1`
    text-align: center;
    font-size: 3rem;
    letter-spacing: 5px;
    position: relative;

    &::before{
      content:"";
      position: absolute;
      width: 2rem;
      height:2px;
      background-color: #ef4b6c;
      top: 100%;
      left:50%;
    }

`

export const FeatureGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap:10px;  
    width: calc(100% - 10vw) ;
    justify-content: center;
    padding: 2rem;

`

export const GridColumn = styled.article`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem 0;
`
export const ImageWrapper = styled.div`

border-radius: 50%;
padding:1.2em;
&.one {
		background: linear-gradient(130deg, #9cb3ff 0%, #b0ffe9 100%);
	}
	&.two {
		background: linear-gradient(220deg, #e7d1ff 0%, #8383ef 100%);
	}
	&.three {
		background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
	}
	&.four {
		background: linear-gradient(130deg, #ffa8e8 0%, #ffe6e6 100%);
	}
	&.five {
		background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
	}
	&.six {
		background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
	}

`

export const TextWrapper = styled.div`
  
display: flex;
gap: 1px;
flex-direction: column;
width: 70%;
padding: 1rem;
`
export const FeatureName = styled.h3`
  
font-weight: 600;
font-size: 1.3rem;
letter-spacing: 2px;
text-align: center;

@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}

`

export const FeatureText = styled.p`
  margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.2;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}

`

