import React from 'react'
import { featuresData } from '../../data/FeaturesData';
import { FeatureGrid, FeatureName, FeatureSection, FeatureText, FeatureTitle, GridColumn, ImageWrapper, TextWrapper } from './FeaturesStyles';



export default function Features() {
  return (
    <FeatureSection id='about'>
    <FeatureTitle>
        What We Do
    </FeatureTitle>
    <FeatureGrid>
    {featuresData.map((featureObj, index)=>{

      return(

        <GridColumn>
          <ImageWrapper className={featureObj.imgClass}>
          {featureObj.icon}
          </ImageWrapper>
          <TextWrapper>
            <FeatureName>{featureObj.name}</FeatureName>
            <FeatureText>
              {featureObj.description}
            </FeatureText>
          </TextWrapper>
        </GridColumn>

      )


    })}



    </FeatureGrid>

    </FeatureSection>
  )
}
