<?php
    include ('../../../../../../Languages/MultilingualText.php');
    include ('../../../../../../Languages/CheckLanguage.php');
?>

<div id="DivIdCode">
    <div id="DivIdWhoAmI">
        <div id="DivIdProjectTitle">
            <div id="DivIdText">
                <div id="DivIdProjectTitleText">
                    <div id="DivIdTitleTextSize">
                        <div id="DivIdTextWhoAmI">
                            <?php
                                $multilingualText = MultilingualText::MultilingualText();
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "whoAmI");
                            ?>
                        </div>
                    </div>
                </div>
                <div id="DivIdProjectTitleText2">
                    <div id="DivIdTitleTextSize">
                        <div id="DivIdTextName">
                            <?php
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "name");
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdTableCodeWrap">
            <div id="DivTextWhoAmI">
                <div id="DivIdText">
                    <div id="DivIdTextTalkingAboutMe">
                        <?php
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "talkingAboutMe");
                        ?>
                    </div>
                </div>
            </div>
            <div id="DivMyPicture">
                <img id="ImgIdPicture" src="View/Images/Pictures/10269429_761463870605004_4764397887348042944_n.jpg">
                </img>
            </div>
        </div>
    </div>
</div>
