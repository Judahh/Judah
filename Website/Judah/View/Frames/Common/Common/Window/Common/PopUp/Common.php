<?php
    include ('../../../../../../Languages/MultilingualText.php');
?>

<div id="DivIdGlass">
    <div id="DivIdPopUp">
        <div id="DivIdPopUpHeader">
            <div id="DivIdHalf">
                <div id="DivIdFullWidthFloat">
                    <div id="DivIdProjectTitle">
                        <div id="DivIdNeon">
                            <div id="DivIdText">
                                <div id="DivIdProjectTitleText">
                                    <div id="DivIdTitleTextSize">
                                        <?php
                                            $multilingualText = MultilingualText::MultilingualText();
                                            echo $multilingualText->getMultilingualTextFromWindowFromPopUp("English-USA", "Common", "languages");
                                        ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="DivIdPopUpClose">
                <div id="DivIdNeon" onclick="popUpClose('DivIdPopUpBox')">
                    <div id="DivIdRedCircle"></div>
                </div>
            </div>
        </div>

        <div id="DivIdPopUpBody">
            <div id="DivIdPopUpBodyWrap">
                <div id="DivIdHalf">
                    <div id="DivIdNeon">
                        <div id="DivIdText">
                            -English/USA
                        </div>
                    </div>
                    <div id="DivIdNeon">
                        <div id="DivIdText">
                            -Português/Brasil
                        </div>
                    </div>
                    <div id="DivIdNeon">
                        <div id="DivIdText">
                            -<?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromPopUp("English-USA", "Common", "current");
                            ?>: English/USA
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdPopUpFooter">
            <div id="DivIdHalf">
                <div id="DivIdPopUpOK">
                    <div id="DivIdNeon" onclick="popUpClose('DivIdPopUpBox')">
                        <div id="DivIdText">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromPopUp("English-USA", "Common", "oK");
                            ?>
                        </div>
                    </div>
                </div>
                <div id="DivIdPopUpCancel">
                    <div id="DivIdNeon" onclick="popUpClose('DivIdPopUpBox')">
                        <div id="DivIdText">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromPopUp("English-USA", "Common", "cancel");
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>