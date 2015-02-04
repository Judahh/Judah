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
                        <div id="DivIdTextName" itemprp="">
                            <?php
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "name");
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdTableCodeWrap">
            <div id="DivFullBlock">
                <div id="DivMyPicture">
                    <img id="ImgIdPicture" src="View/Images/Pictures/10269429_761463870605004_4764397887348042944_n.jpg">
                    </img>
                </div>
                <div id="DivTextWhoAmI">
                    <div id="DivIdTextBasic">
                        <div id="DivIdTextTalkingAboutMe">
                            <?php
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "talkingAboutMe");
                            ?>
                        </div>
                    </div>
                </div>
                <div id="DivTextWhoAmI">
                    <div id="DivIdText">
                        <div id="DivIdProjectTitleText">
                            <div id="DivIdTitleTextSize">
                                <div id="DivIdTextThinkDifferentTitle">
                                    <?php
                                        echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "thinkDifferentTitle");
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="DivFullBlock">
                <div id="DivIdVideo">
                    <div class="videoWrapper">
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/Rzu6zeLSWq8" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div id="DivFullBlock">
                <div id="DivTextWhoAmI2">
                    <div id="DivIdTextBasic">
                        <div id="DivIdTextThinkDifferent">
                            <?php
                                echo $multilingualText->getMultilingualTextFromWindowFromCommon($language , "WhoAmI", "thinkDifferent");
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
