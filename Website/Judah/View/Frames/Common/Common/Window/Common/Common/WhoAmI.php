<?php
    include ('../../../../../../Languages/MultilingualText.php');
?>

<div id="DivIdCode">
    <div id="DivIdProjectTitle">
        <div id="DivIdText">
            <div id="DivIdProjectTitleText">
                <div id="DivIdTitleTextSize">
                    <?php
                        $multilingualText = MultilingualText::MultilingualText();
                        echo $multilingualText->getMultilingualTextFromWindowFromCommon("English-USA", "WhoAmI", "whoAmI");
                    ?>
                </div>
            </div>
            <div id="DivIdProjectTitleText2">
                <div id="DivIdTitleTextSize">
                    <?php
                        echo $multilingualText->getMultilingualTextFromWindowFromCommon("English-USA", "WhoAmI", "name");
                    ?>
                </div>
            </div>
        </div>
    </div>

    <div id="DivIdTableCodeWrap">
        <div id="DivQuarterBlock">
            <img id="ImgIdPicture" src="View/Images/Pictures/10269429_761463870605004_4764397887348042944_n.jpg">
            </img>
        </div>
        <div id="DivIdText">
            <?php
                echo $multilingualText->getMultilingualTextFromWindowFromCommon("English-USA", "WhoAmI", "talkingAboutMe");
            ?>
        </div>
    </div>
</div>
