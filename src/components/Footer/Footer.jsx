// STYLES
import './Footer.scss';

export const Footer = () => {
    return <div className='footer'>
        <div className='footer_inner'>
            <div className="footer_inner_links">
                {['Контакты', 'Политика конфиденциальности', 'Публичная оферта'].map((link, idx) =>
                    <p
                        key={idx}
                        className="footer_inner_links_link"
                        onClick={() => window.location.href = "https://wildbest.group/"}
                    >
                        {link} {idx !== 2 && <span className="footer_inner_links_link_delimiter">|</span>}
                    </p>
                )}
            </div>
            <p className="footer_inner_text">© 2021 WildBest</p>

        </div>
    </div>
}
