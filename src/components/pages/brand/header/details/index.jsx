import React from 'react'

// Styles
import { Wrapper, Details, Detail, DetailSpan, Description } from './styles'

const BrandDetails = ({ description, website, areaServed, headquarters }) => {
    return (
        <Wrapper>
            <Details>
                {headquarters ? <Detail>
                    Headquarters: <DetailSpan>{headquarters}</DetailSpan>
                </Detail>
                    : ''}

                {areaServed ? <Detail>
                    Area served: <DetailSpan>{areaServed}</DetailSpan>
                </Detail> : ''}

                {website ? <Detail>
                    Website: <a href={!(/^(http|https):\/\//.test(website)) ? `http://${website}` : website}>{website ? website.replace(/^(http|https):\/\//, '').replace('www.', '') : ''}</a>
                </Detail> : ''}
            </Details>
            {description ? <Description>
                {description}
            </Description> : ''}
        </Wrapper>
    )
}

export { BrandDetails }