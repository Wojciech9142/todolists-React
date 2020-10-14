import React from 'react';
import Container from '../../common/Container';
import Header from '../../common/Header';
import Section from '../../common/Section';
import { Paragraph } from './styled';

export default () => {
    return (
        <Container>
            <Header title="O autorze" />

            <Section
                title="Wojciech Wolak"
                body={
                    <>
                        <Paragraph>
                            Jestem prostym chłopakiem z Kołobrzegu, który chciałby profesjonalnie zająć się tworzeniem stron internetowych. Będąc w szkole bardziej interesowałem się back-endem, jednak z czasem zacząłem tworzyć front-end dla siebie. Próbowałem frameworków Angular, Vue, lecz to React przypadł mi do gustu najbardziej i mimo że dopiero uczę się go jestem pewny, że jest to framework w sam raz dla mnie.
                        </Paragraph>
                        <Paragraph>
                            Po czasie spędzonym w pracy rozwijam umiejętności w tworzeniu stron. Kiedy odejdę od laptopa lubię jeździć na rowerze, piec ciasta, pograć w piłkę nożną.
                        </Paragraph>
                    </>
                }
            />
        </Container>
    )
}