import { hexToComplimentary } from "../util/util";

type BookCoverProps = {
    mainColor: string;
}

const BookCover: React.FC<BookCoverProps> = ({ mainColor }) => {


    const pattern1 = (title: string, author: string) => {
        const patternColor = hexToComplimentary(mainColor);

        const circle = (top: string, left: string, bottom: string, right: string) => {
            return (
                <div style={{
                    border: `2px solid ${patternColor}`,
                    height: 10,
                    width: 10,
                    borderRadius: "50%",
                    position: "absolute",
                    top: top,
                    left: left,
                    bottom: bottom,
                    right: right,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div style={{
                        backgroundColor: patternColor,
                        height: "30%",
                        width: "30%",
                        borderRadius: "50%",
                    }}></div>
                </div>
            )
        }


        return (
            <div style={{
                border: `2px solid ${patternColor}`,
                width: "95%",
                height: "95%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}>
                {circle("3px", "3px", "auto", "auto")}
                {circle("3px", "auto", "auto", "3px")}
                {circle("auto", "3px", "3px", "auto")}
                {circle("auto", "auto", "3px", "3px")}
                <div style={{
                    border: `2px solid ${patternColor}`,
                    height: "95%",
                    width: "95%",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <i style={{
                        fontSize: "2em",
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontFamily: "cursive",
                        textAlign: "center",
                    }}>
                        {title}
                    </i>
                    <i style={{
                        fontSize: "1em",
                        color: "white",
                        fontFamily: "cursive",
                        textAlign: "center",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, 500%)",
                    }}>
                        {author}
                    </i>
                </div>
            </div>)
    }


    return (
        <div className="book-cover" style={{ backgroundColor: mainColor }}>
            {pattern1("Thus spoke Zarathustra", "Friedrich Nietzsche")}
        </div>
    );
}

export default BookCover;